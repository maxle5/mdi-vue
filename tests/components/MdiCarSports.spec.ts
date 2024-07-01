
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCarSports from "../../src/components/MdiCarSports.vue";

test("MdiCarSports snapshot", () => {
  const wrapper = mount(MdiCarSports, {});
  expect(wrapper.html()).toMatchSnapshot();
});
