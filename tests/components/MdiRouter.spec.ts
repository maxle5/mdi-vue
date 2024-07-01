
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRouter from "../../src/components/MdiRouter.vue";

test("MdiRouter snapshot", () => {
  const wrapper = mount(MdiRouter, {});
  expect(wrapper.html()).toMatchSnapshot();
});
