
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDisqus from "../../src/components/MdiDisqus.vue";

test("MdiDisqus snapshot", () => {
  const wrapper = mount(MdiDisqus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
