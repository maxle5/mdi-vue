
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSpider from "../../src/components/MdiSpider.vue";

test("MdiSpider snapshot", () => {
  const wrapper = mount(MdiSpider, {});
  expect(wrapper.html()).toMatchSnapshot();
});
