
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiViewDashboardEdit from "../../src/components/MdiViewDashboardEdit.vue";

test("MdiViewDashboardEdit snapshot", () => {
  const wrapper = mount(MdiViewDashboardEdit, {});
  expect(wrapper.html()).toMatchSnapshot();
});
