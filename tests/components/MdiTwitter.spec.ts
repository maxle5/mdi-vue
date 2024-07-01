
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTwitter from "../../src/components/MdiTwitter.vue";

test("MdiTwitter snapshot", () => {
  const wrapper = mount(MdiTwitter, {});
  expect(wrapper.html()).toMatchSnapshot();
});
