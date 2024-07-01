
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFlaskRoundBottomEmpty from "../../src/components/MdiFlaskRoundBottomEmpty.vue";

test("MdiFlaskRoundBottomEmpty snapshot", () => {
  const wrapper = mount(MdiFlaskRoundBottomEmpty, {});
  expect(wrapper.html()).toMatchSnapshot();
});
