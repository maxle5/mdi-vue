
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArtstation from "../../src/components/MdiArtstation.vue";

test("MdiArtstation snapshot", () => {
  const wrapper = mount(MdiArtstation, {});
  expect(wrapper.html()).toMatchSnapshot();
});
