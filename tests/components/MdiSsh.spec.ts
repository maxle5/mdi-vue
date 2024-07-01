
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSsh from "../../src/components/MdiSsh.vue";

test("MdiSsh snapshot", () => {
  const wrapper = mount(MdiSsh, {});
  expect(wrapper.html()).toMatchSnapshot();
});
