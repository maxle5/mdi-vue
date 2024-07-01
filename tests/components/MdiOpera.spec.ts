
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiOpera from "../../src/components/MdiOpera.vue";

test("MdiOpera snapshot", () => {
  const wrapper = mount(MdiOpera, {});
  expect(wrapper.html()).toMatchSnapshot();
});
