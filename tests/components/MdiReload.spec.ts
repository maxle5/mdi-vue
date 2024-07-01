
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiReload from "../../src/components/MdiReload.vue";

test("MdiReload snapshot", () => {
  const wrapper = mount(MdiReload, {});
  expect(wrapper.html()).toMatchSnapshot();
});
