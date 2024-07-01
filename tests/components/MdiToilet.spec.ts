
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiToilet from "../../src/components/MdiToilet.vue";

test("MdiToilet snapshot", () => {
  const wrapper = mount(MdiToilet, {});
  expect(wrapper.html()).toMatchSnapshot();
});
