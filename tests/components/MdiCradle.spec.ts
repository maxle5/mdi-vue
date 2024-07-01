
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCradle from "../../src/components/MdiCradle.vue";

test("MdiCradle snapshot", () => {
  const wrapper = mount(MdiCradle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
