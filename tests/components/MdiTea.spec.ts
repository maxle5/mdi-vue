
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTea from "../../src/components/MdiTea.vue";

test("MdiTea snapshot", () => {
  const wrapper = mount(MdiTea, {});
  expect(wrapper.html()).toMatchSnapshot();
});
