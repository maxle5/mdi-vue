
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiViewDashboard from "../../src/components/MdiViewDashboard.vue";

test("MdiViewDashboard snapshot", () => {
  const wrapper = mount(MdiViewDashboard, {});
  expect(wrapper.html()).toMatchSnapshot();
});
