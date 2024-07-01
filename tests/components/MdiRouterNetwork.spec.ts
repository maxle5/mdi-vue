
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRouterNetwork from "../../src/components/MdiRouterNetwork.vue";

test("MdiRouterNetwork snapshot", () => {
  const wrapper = mount(MdiRouterNetwork, {});
  expect(wrapper.html()).toMatchSnapshot();
});
