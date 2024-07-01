
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStool from "../../src/components/MdiStool.vue";

test("MdiStool snapshot", () => {
  const wrapper = mount(MdiStool, {});
  expect(wrapper.html()).toMatchSnapshot();
});
