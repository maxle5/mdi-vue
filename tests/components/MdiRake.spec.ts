
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRake from "../../src/components/MdiRake.vue";

test("MdiRake snapshot", () => {
  const wrapper = mount(MdiRake, {});
  expect(wrapper.html()).toMatchSnapshot();
});
