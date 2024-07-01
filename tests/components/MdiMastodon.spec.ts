
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMastodon from "../../src/components/MdiMastodon.vue";

test("MdiMastodon snapshot", () => {
  const wrapper = mount(MdiMastodon, {});
  expect(wrapper.html()).toMatchSnapshot();
});
