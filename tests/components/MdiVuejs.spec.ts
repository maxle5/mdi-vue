
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVuejs from "../../src/components/MdiVuejs.vue";

test("MdiVuejs snapshot", () => {
  const wrapper = mount(MdiVuejs, {});
  expect(wrapper.html()).toMatchSnapshot();
});
