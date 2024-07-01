
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShore from "../../src/components/MdiShore.vue";

test("MdiShore snapshot", () => {
  const wrapper = mount(MdiShore, {});
  expect(wrapper.html()).toMatchSnapshot();
});
