
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookOpen from "../../src/components/MdiBookOpen.vue";

test("MdiBookOpen snapshot", () => {
  const wrapper = mount(MdiBookOpen, {});
  expect(wrapper.html()).toMatchSnapshot();
});
