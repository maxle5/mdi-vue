
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRocket from "../../src/components/MdiRocket.vue";

test("MdiRocket snapshot", () => {
  const wrapper = mount(MdiRocket, {});
  expect(wrapper.html()).toMatchSnapshot();
});
