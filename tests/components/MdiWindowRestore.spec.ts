
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWindowRestore from "../../src/components/MdiWindowRestore.vue";

test("MdiWindowRestore snapshot", () => {
  const wrapper = mount(MdiWindowRestore, {});
  expect(wrapper.html()).toMatchSnapshot();
});
