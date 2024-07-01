
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFlaskRoundBottom from "../../src/components/MdiFlaskRoundBottom.vue";

test("MdiFlaskRoundBottom snapshot", () => {
  const wrapper = mount(MdiFlaskRoundBottom, {});
  expect(wrapper.html()).toMatchSnapshot();
});
