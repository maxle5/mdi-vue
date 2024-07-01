
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCupOff from "../../src/components/MdiCupOff.vue";

test("MdiCupOff snapshot", () => {
  const wrapper = mount(MdiCupOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
