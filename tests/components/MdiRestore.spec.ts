
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRestore from "../../src/components/MdiRestore.vue";

test("MdiRestore snapshot", () => {
  const wrapper = mount(MdiRestore, {});
  expect(wrapper.html()).toMatchSnapshot();
});
