
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMirror from "../../src/components/MdiMirror.vue";

test("MdiMirror snapshot", () => {
  const wrapper = mount(MdiMirror, {});
  expect(wrapper.html()).toMatchSnapshot();
});
