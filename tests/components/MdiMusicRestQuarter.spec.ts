
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMusicRestQuarter from "../../src/components/MdiMusicRestQuarter.vue";

test("MdiMusicRestQuarter snapshot", () => {
  const wrapper = mount(MdiMusicRestQuarter, {});
  expect(wrapper.html()).toMatchSnapshot();
});
