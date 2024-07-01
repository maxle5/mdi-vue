
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRss from "../../src/components/MdiRss.vue";

test("MdiRss snapshot", () => {
  const wrapper = mount(MdiRss, {});
  expect(wrapper.html()).toMatchSnapshot();
});
