
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiViewWeek from "../../src/components/MdiViewWeek.vue";

test("MdiViewWeek snapshot", () => {
  const wrapper = mount(MdiViewWeek, {});
  expect(wrapper.html()).toMatchSnapshot();
});
