
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFlaskPlus from "../../src/components/MdiFlaskPlus.vue";

test("MdiFlaskPlus snapshot", () => {
  const wrapper = mount(MdiFlaskPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
