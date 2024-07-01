
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPageLayoutSidebarRight from "../../src/components/MdiPageLayoutSidebarRight.vue";

test("MdiPageLayoutSidebarRight snapshot", () => {
  const wrapper = mount(MdiPageLayoutSidebarRight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
