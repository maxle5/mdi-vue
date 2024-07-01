
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiApplicationImport from "../../src/components/MdiApplicationImport.vue";

test("MdiApplicationImport snapshot", () => {
  const wrapper = mount(MdiApplicationImport, {});
  expect(wrapper.html()).toMatchSnapshot();
});
