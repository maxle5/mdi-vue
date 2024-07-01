
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRoutes from "../../src/components/MdiRoutes.vue";

test("MdiRoutes snapshot", () => {
  const wrapper = mount(MdiRoutes, {});
  expect(wrapper.html()).toMatchSnapshot();
});
