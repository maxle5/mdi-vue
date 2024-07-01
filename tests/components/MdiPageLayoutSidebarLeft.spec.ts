
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPageLayoutSidebarLeft from "../../src/components/MdiPageLayoutSidebarLeft.vue";

test("MdiPageLayoutSidebarLeft snapshot", () => {
  const wrapper = mount(MdiPageLayoutSidebarLeft, {});
  expect(wrapper.html()).toMatchSnapshot();
});
