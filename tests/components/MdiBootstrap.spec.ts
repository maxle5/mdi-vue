
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBootstrap from "../../src/components/MdiBootstrap.vue";

test("MdiBootstrap snapshot", () => {
  const wrapper = mount(MdiBootstrap, {});
  expect(wrapper.html()).toMatchSnapshot();
});
