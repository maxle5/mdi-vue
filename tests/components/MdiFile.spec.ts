
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFile from "../../src/components/MdiFile.vue";

test("MdiFile snapshot", () => {
  const wrapper = mount(MdiFile, {});
  expect(wrapper.html()).toMatchSnapshot();
});
