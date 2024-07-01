
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTablePicnic from "../../src/components/MdiTablePicnic.vue";

test("MdiTablePicnic snapshot", () => {
  const wrapper = mount(MdiTablePicnic, {});
  expect(wrapper.html()).toMatchSnapshot();
});
