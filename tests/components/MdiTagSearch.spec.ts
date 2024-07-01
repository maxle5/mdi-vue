
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTagSearch from "../../src/components/MdiTagSearch.vue";

test("MdiTagSearch snapshot", () => {
  const wrapper = mount(MdiTagSearch, {});
  expect(wrapper.html()).toMatchSnapshot();
});
