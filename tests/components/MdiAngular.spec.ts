
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAngular from "../../src/components/MdiAngular.vue";

test("MdiAngular snapshot", () => {
  const wrapper = mount(MdiAngular, {});
  expect(wrapper.html()).toMatchSnapshot();
});
