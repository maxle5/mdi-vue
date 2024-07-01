
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFlaskRoundBottomOutline from "../../src/components/MdiFlaskRoundBottomOutline.vue";

test("MdiFlaskRoundBottomOutline snapshot", () => {
  const wrapper = mount(MdiFlaskRoundBottomOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
