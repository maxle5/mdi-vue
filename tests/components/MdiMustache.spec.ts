
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMustache from "../../src/components/MdiMustache.vue";

test("MdiMustache snapshot", () => {
  const wrapper = mount(MdiMustache, {});
  expect(wrapper.html()).toMatchSnapshot();
});
