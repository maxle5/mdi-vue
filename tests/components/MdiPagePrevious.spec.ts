
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPagePrevious from "../../src/components/MdiPagePrevious.vue";

test("MdiPagePrevious snapshot", () => {
  const wrapper = mount(MdiPagePrevious, {});
  expect(wrapper.html()).toMatchSnapshot();
});
