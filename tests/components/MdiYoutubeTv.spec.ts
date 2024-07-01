
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiYoutubeTv from "../../src/components/MdiYoutubeTv.vue";

test("MdiYoutubeTv snapshot", () => {
  const wrapper = mount(MdiYoutubeTv, {});
  expect(wrapper.html()).toMatchSnapshot();
});
