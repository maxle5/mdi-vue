
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountFile from "../../src/components/MdiAccountFile.vue";

test("MdiAccountFile snapshot", () => {
  const wrapper = mount(MdiAccountFile, {});
  expect(wrapper.html()).toMatchSnapshot();
});
