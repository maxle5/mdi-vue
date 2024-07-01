
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLan from "../../src/components/MdiLan.vue";

test("MdiLan snapshot", () => {
  const wrapper = mount(MdiLan, {});
  expect(wrapper.html()).toMatchSnapshot();
});
