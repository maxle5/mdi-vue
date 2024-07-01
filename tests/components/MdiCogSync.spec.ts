
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCogSync from "../../src/components/MdiCogSync.vue";

test("MdiCogSync snapshot", () => {
  const wrapper = mount(MdiCogSync, {});
  expect(wrapper.html()).toMatchSnapshot();
});
