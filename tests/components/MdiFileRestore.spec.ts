
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileRestore from "../../src/components/MdiFileRestore.vue";

test("MdiFileRestore snapshot", () => {
  const wrapper = mount(MdiFileRestore, {});
  expect(wrapper.html()).toMatchSnapshot();
});
