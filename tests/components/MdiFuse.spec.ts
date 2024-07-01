
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFuse from "../../src/components/MdiFuse.vue";

test("MdiFuse snapshot", () => {
  const wrapper = mount(MdiFuse, {});
  expect(wrapper.html()).toMatchSnapshot();
});
