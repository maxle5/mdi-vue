
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFlaskOff from "../../src/components/MdiFlaskOff.vue";

test("MdiFlaskOff snapshot", () => {
  const wrapper = mount(MdiFlaskOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
