
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStackExchange from "../../src/components/MdiStackExchange.vue";

test("MdiStackExchange snapshot", () => {
  const wrapper = mount(MdiStackExchange, {});
  expect(wrapper.html()).toMatchSnapshot();
});
