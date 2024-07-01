
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiApplication from "../../src/components/MdiApplication.vue";

test("MdiApplication snapshot", () => {
  const wrapper = mount(MdiApplication, {});
  expect(wrapper.html()).toMatchSnapshot();
});
